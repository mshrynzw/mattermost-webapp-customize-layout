// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

const {getWorkspaces} = require('./utils');

for (const workspace of getWorkspaces()) {
    const linkPath = path.join('node_modules', workspace.replace('packages/', '@mattermost/'));

    console.log(`Removing symlink from ${linkPath}`);

    fs.unlink(
        linkPath,
        (err) => {
            if (err) {
                console.error('Unable to remove symlink before restoring from cache', err);
            }
        },
    );
}
