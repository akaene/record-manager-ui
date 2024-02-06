import React from 'react';

import Records from "./Records";
import Routes from "../../constants/RoutesConstants";
import {transitionToWithOpts} from "../../utils/Routing";
import {exportRecords, importRecords, loadRecords} from "../../actions/RecordsActions";
import {injectIntl} from "react-intl";
import withI18n from "../../i18n/withI18n";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {deleteRecord, updateRecord} from "../../actions/RecordActions";
import {loadFormTemplates} from "../../actions/FormTemplatesActions";
import {extractQueryParam} from "../../utils/Utils"
import {PAGE_SIZE, RECORD_PHASE} from "../../constants/DefaultConstants";
import {trackPromise} from "react-promise-tracker";
import {INITIAL_PAGE} from "../misc/Pagination";

class RecordsController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: INITIAL_PAGE
        };
    }

    componentDidMount() {
        this._loadRecords();
        this.props.loadFormTemplates();
    }

    _loadRecords() {
        trackPromise(this.props.loadRecords({page: this.state.pageNumber, size: PAGE_SIZE}), "records");
    }

    _onEditRecord = (record) => {
        this.props.transitionToWithOpts(Routes.editRecord, {
            params: {key: record.key},
            handlers: {
                onCancel: Routes.records
            }
        });
    };

    _onAddRecord = (formTemplate) => {
        const opts = {};
        if (formTemplate) {
            opts.query = new Map([["formTemplate", formTemplate]]);
        }
        opts.handlers = {
            onSuccess: Routes.records,
                onCancel: Routes.records
        }
        this.props.transitionToWithOpts(Routes.createRecord, opts);
    };

    _onDeleteRecord = (record) => {
        trackPromise(this.props.deleteRecord(record), "records");
    };

    _onPublishRecords = async () => {

        this.setState({
            records: this.props.recordsLoaded.records
        }, async () => {
            const updatedRecords = this.state.records.map(async (record) => {
                if (record.phase === RECORD_PHASE.COMPLETED) {
                    const updatedRecord = {...record, phase: RECORD_PHASE.PUBLISHED};
                    await this.props.updateRecord(updatedRecord);
                    return updatedRecord;
                }
            });

            return await Promise.all(updatedRecords);
        })

    };

    _onExportRecords = (exportType) => {
        trackPromise(this.props.exportRecords(exportType), "records");
    };

    _onImportRecords = (file) => {
        trackPromise(this.props.importRecords(file), "records");
    };

    onPagination = (pageNumber) => {
        this.setState({pageNumber}, this._loadRecords);
    }

    render() {
        const {formTemplatesLoaded, recordsLoaded, recordDeleted, recordsDeleting, currentUser} = this.props;
        const formTemplate = extractQueryParam(this.props.location.search, "formTemplate");
        if (!currentUser) {
            return null;
        }
        const handlers = {
            onEdit: this._onEditRecord,
            onCreate: this._onAddRecord,
            onDelete: this._onDeleteRecord,
            onPublish: this._onPublishRecords,
            onExport: this._onExportRecords,
            onImport: this._onImportRecords,
        };
        const pagination = {
            handlePagination: this.onPagination,
            pageNumber: this.state.pageNumber,
            itemCount: recordsLoaded.records?.length,
            pageCount: recordsLoaded.pageCount
        }
        return <Records recordsLoaded={recordsLoaded} handlers={handlers} pagination={pagination}
                        recordDeleted={recordDeleted} recordsDeleting={recordsDeleting} currentUser={currentUser}
                        formTemplate={formTemplate}
                        formTemplatesLoaded={formTemplatesLoaded}/>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(withI18n(RecordsController)));

function mapStateToProps(state) {
    return {
        recordDeleted: state.record.recordDeleted,
        recordsLoaded: state.records.recordsLoaded,
        formTemplatesLoaded: state.formTemplates.formTemplatesLoaded,
        recordsDeleting: state.record.recordsDeleting,
        currentUser: state.auth.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteRecord: bindActionCreators(deleteRecord, dispatch),
        updateRecord: bindActionCreators(updateRecord, dispatch),
        loadRecords: bindActionCreators(loadRecords, dispatch),
        exportRecords: bindActionCreators(exportRecords, dispatch),
        importRecords: bindActionCreators(importRecords, dispatch),
        loadFormTemplates: bindActionCreators(loadFormTemplates, dispatch),
        transitionToWithOpts: bindActionCreators(transitionToWithOpts, dispatch)
    }
}