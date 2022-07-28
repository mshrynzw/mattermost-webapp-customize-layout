// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const {getWorkspaces} = require('./utils');

for (const workspace of getWorkspaces()) {
    fs.symlink(
        workspace,
        path.join('node_modules', workspace.replace('packages/','@mattermost/')),
        'dir',
        (err) => {
            if (err) {
                console.error('Unable to recreate symlinks after restoring from cache', err);
            }
        },
    );
}
