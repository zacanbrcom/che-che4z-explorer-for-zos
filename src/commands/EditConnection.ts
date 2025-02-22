/*
 * Copyright (c) 2019 Broadcom.
 * The term "Broadcom" refers to Broadcom Inc. and/or its subsidiaries.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Broadcom, Inc. - initial API and implementation
 */

import * as vscode from "vscode";
import { ZoweRestClient } from "../service/ZoweRestClient";
import { MVSDataProvider } from "../ui/tree/DatasetDataProvider";
import { HostPanel } from "../ui/views/HostPanel";

export async function editConnection(
    context: vscode.ExtensionContext,
    mvsDataProvider: MVSDataProvider,
    rest: ZoweRestClient,
    arg: any,
) {
    if (arg.host) {
        HostPanel.editHost(context, arg.host, mvsDataProvider, rest);
    } else {
        HostPanel.createHost(context, rest);
    }
}
