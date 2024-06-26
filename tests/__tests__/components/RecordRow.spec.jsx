"use strict";

import React from "react";
import { IntlProvider } from "react-intl";
import TestUtils from "react-dom/test-utils";
import RecordRow from "../../../src/components/record/RecordRow";
import enLang from "../../../src/i18n/en";
import { describe, expect, vi, test } from "vitest";

describe("RecordRow", function () {
  const intlData = enLang;
  let record,
    disableDelete = false,
    deletionLoading = false,
    onEdit = vi.fn(),
    onDelete = vi.fn();

  record = {
    uri: "http://onto.fel.cvut.cz/ontologies/record-manager/patient-record#instance456619208",
    key: "159968282553298775",
    localName: "Test2",
    dateCreated: "1520956570035",
    author: { username: "test" },
    institution: { key: 12345678 },
  };

  test.skip("renders one row of table with 5 columns and 2 buttons", function () {
    const tree = TestUtils.renderIntoDocument(
      <IntlProvider locale="en" {...intlData}>
        <table>
          <tbody>
            <RecordRow
              record={record}
              onEdit={onEdit}
              onDelete={onDelete}
              deletionLoading={deletionLoading}
              disableDelete={disableDelete}
            />
          </tbody>
        </table>
      </IntlProvider>,
    );
    const td = TestUtils.scryRenderedDOMComponentsWithTag(tree, "td");
    expect(td.length).toEqual(5);
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
    expect(buttons.length).toEqual(4);
  });

  test.skip('renders "Open" button and click on it', function () {
    const tree = TestUtils.renderIntoDocument(
      <IntlProvider locale="en" {...intlData}>
        <table>
          <tbody>
            <RecordRow
              record={record}
              onEdit={onEdit}
              onDelete={onDelete}
              deletionLoading={deletionLoading}
              disableDelete={disableDelete}
            />
          </tbody>
        </table>
      </IntlProvider>,
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
    expect(buttons.length).toEqual(4);

    TestUtils.Simulate.click(buttons[0]); // Open Record
    expect(onEdit).toHaveBeenCalled();
  });

  test.skip("renders id and patients identifier buttons together with open and delete button and click on one but delete button", function () {
    const tree = TestUtils.renderIntoDocument(
      <IntlProvider locale="en" {...intlData}>
        <table>
          <tbody>
            <RecordRow
              record={record}
              onEdit={onEdit}
              onDelete={onDelete}
              deletionLoading={deletionLoading}
              disableDelete={disableDelete}
            />
          </tbody>
        </table>
      </IntlProvider>,
    );

    const links = TestUtils.scryRenderedDOMComponentsWithTag(tree, "button");
    expect(links.length).toEqual(4);

    TestUtils.Simulate.click(links[0]);
    expect(onEdit).toHaveBeenCalled();
  });

  test.skip('renders "Delete" button and click on it', function () {
    const tree = TestUtils.renderIntoDocument(
      <IntlProvider locale="en" {...intlData}>
        <table>
          <tbody>
            <RecordRow
              record={record}
              onEdit={onEdit}
              onDelete={onDelete}
              deletionLoading={deletionLoading}
              disableDelete={disableDelete}
            />
          </tbody>
        </table>
      </IntlProvider>,
    );
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(tree, "Button");
    expect(buttons.length).toEqual(4);

    TestUtils.Simulate.click(buttons[3]); // Delete Record
    expect(onDelete).toHaveBeenCalled();
  });
});
