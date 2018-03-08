import TestUtils from "react-addons-test-utils";
import {ROLE} from "../../../js/constants/DefaultConstants";
import React from "react";
import {IntlProvider} from "react-intl";
import InstitutionMembers from "../../../js/components/institution/InstitutionMembers";

describe('InstitutionMembers', function () {
    const intlData = require('../../../js/i18n/en');
    let members,
        membersEmpty,
        institution,
        onEditUser = jasmine.createSpy('onEditUser'),
        onAddNewUser = jasmine.createSpy('onAddNewUser'),
        onDelete = jasmine.createSpy('onDelete'),
        user,
        admin;

    members = [
        {
            username: 'test1',
            firstName: 'test',
            lastName: 'test',
            emailAddress: 'test@test.cz'
        },
        {
            username: 'test2',
            firstName: 'test',
            lastName: 'test',
            emailAddress: 'test@test.cz'
        }
    ];

    membersEmpty = [];

    institution = {
        key: 23123323312
    };

    user = {
        username: 'user',
        role: ROLE.DOCTOR
    };

    admin = {
        username: 'admin',
        role: ROLE.ADMIN
    };

    it('renders panel with table and table headers and columns', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={members} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={admin}/>
            </IntlProvider>);
        const panelHeading = TestUtils.findRenderedDOMComponentWithClass(tree, 'panel');
        expect(panelHeading).not.toBeNull();
        const panelBody = TestUtils.findRenderedDOMComponentWithClass(tree, 'panel-body');
        expect(panelBody).not.toBeNull();
        const table = TestUtils.scryRenderedDOMComponentsWithTag(tree,'table');
        expect(table).not.toBeNull();
        const th = TestUtils.scryRenderedDOMComponentsWithTag(tree,'th');
        expect(th.length).toEqual(4);
        const td = TestUtils.scryRenderedDOMComponentsWithTag(tree,'td');
        expect(td.length).toEqual(8);
    });

    it('renders panel without table', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={membersEmpty} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={admin}/>
            </IntlProvider>);
        const panelHeading = TestUtils.findRenderedDOMComponentWithClass(tree, 'panel');
        expect(panelHeading).not.toBeNull();
        const panelBody = TestUtils.findRenderedDOMComponentWithClass(tree, 'panel-body');
        expect(panelBody).not.toBeNull();
        const table = TestUtils.scryRenderedDOMComponentsWithTag(tree,'table');
        expect(table.length).toEqual(0);
    });

    it('renders "Add new user" button for admin and click on it', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={membersEmpty} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={admin}/>
            </IntlProvider>);
        const button = TestUtils.findRenderedDOMComponentWithTag(tree, "Button");
        expect(button).not.toBeNull();
        TestUtils.Simulate.click(button);
        expect(onAddNewUser).toHaveBeenCalled();
    });

    it('does not render "Add new user" button for user', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={membersEmpty} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={user}/>
            </IntlProvider>);
        const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
        expect(buttons.length).toEqual(0);
    });

    it('renders "Delete" button for admin for deleting user and opens modal when click on it', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={members} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={admin}/>
            </IntlProvider>);
        const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
        expect(buttons.length).toEqual(5);
        TestUtils.Simulate.click(buttons[1]); // Delete button
        const modal = TestUtils.scryRenderedDOMComponentsWithClass(tree, "modal-dialog");
        expect(modal).not.toBeNull();
    });

    it('does not render "Delete" button for user, renders only open button and click on it', function () {
        const tree = TestUtils.renderIntoDocument(
            <IntlProvider locale="en" {...intlData}>
                <InstitutionMembers institution={institution} members={members} onDelete={onDelete}
                                    onEditUser={onEditUser} onAddNewUser={onAddNewUser}
                                    currentUser={user}/>
            </IntlProvider>);
        const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
        expect(buttons.length).toEqual(2);
        TestUtils.Simulate.click(buttons[0]); // Delete button
        expect(onEditUser).toHaveBeenCalled();
    });
});