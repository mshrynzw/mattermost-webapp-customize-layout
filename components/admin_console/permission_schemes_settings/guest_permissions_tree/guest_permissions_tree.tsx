// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useCallback, useMemo} from 'react';
import {FormattedMessage} from 'react-intl';

import Permissions from 'mattermost-redux/constants/permissions';
import {Role} from '@mattermost/types/roles';
import {ClientLicense} from '@mattermost/types/config';

import PermissionGroup from '../permission_group.jsx';
import EditPostTimeLimitButton from '../edit_post_time_limit_button';
import EditPostTimeLimitModal from '../edit_post_time_limit_modal';

type Props = {
    license: ClientLicense;
    onToggle: (role: string, permissions: string[]) => void;
    readOnly: boolean;
    scope: string;
    selectRow: (permission: string) => void;
    parentRole?: Role;
    selected?: string | null;
    role?: Partial<Role>;
}

const GuestPermissionsTree = ({license, onToggle, readOnly, scope, selectRow, parentRole, selected, role = {permissions: []}}: Props) => {
    const setPermissions = () => {
        const defaultPermissions = [
            Permissions.CREATE_PRIVATE_CHANNEL,
            Permissions.EDIT_POST,
            Permissions.DELETE_POST,
            Permissions.CREATE_POST,
            {
                id: 'guest_reactions',
                combined: true,
                permissions: [
                    Permissions.ADD_REACTION,
                    Permissions.REMOVE_REACTION,
                ],
            },
            Permissions.USE_CHANNEL_MENTIONS,
        ];
        if (license && license.IsLicensed === 'true' && license.LDAPGroups === 'true') {
            defaultPermissions.push(Permissions.USE_GROUP_MENTIONS);
        }
        return defaultPermissions.map((permission) => {
            if (typeof (permission) === 'string') {
                return {
                    id: `guest_${permission}`,
                    combined: true,
                    permissions: [permission],
                };
            }
            return permission;
        });
    };

    const [editTimeLimitModalIsVisible, setEditTimeLimitModalIsVisible] = React.useState(false);
    const permissions = useMemo<Array<string | Record<string, any>>>(setPermissions, [license]);

    const openPostTimeLimitModal = useCallback(() => {
        setEditTimeLimitModalIsVisible(true);
    }, []);
    const closePostTimeLimitModal = useCallback(() => {
        setEditTimeLimitModalIsVisible(false);
    }, []);
    const toggleGroup = useCallback((ids: string[]) => {
        if (readOnly) {
            return;
        }
        onToggle(role.name!, ids);
    }, [onToggle, readOnly, role.name]);

    const ADDITIONAL_VALUES = useMemo(() => {
        return {
            guest_edit_post: {
                editTimeLimitButton: (
                    <EditPostTimeLimitButton
                        onClick={openPostTimeLimitModal}
                        isDisabled={readOnly}
                    />
                ),
            },
        };
    }, [openPostTimeLimitModal, readOnly]);

    return (
        <div className='permissions-tree guest'>
            <div className='permissions-tree--header'>
                <div className='permission-name'>
                    <FormattedMessage
                        id='admin.permissions.permissionsTree.permission'
                        defaultMessage='Permission'
                    />
                </div>
                <div className='permission-description'>
                    <FormattedMessage
                        id='admin.permissions.permissionsTree.description'
                        defaultMessage='Description'
                    />
                </div>
            </div>
            <div className='permissions-tree--body'>
                <PermissionGroup
                    key='all'
                    id='all'
                    uniqId={role.name}
                    selected={selected}
                    selectRow={selectRow}
                    readOnly={readOnly}
                    permissions={permissions}
                    additionalValues={ADDITIONAL_VALUES}
                    role={role}
                    parentRole={parentRole}
                    scope={scope}
                    combined={false}
                    onChange={toggleGroup}
                    root={true}
                />
            </div>
            <EditPostTimeLimitModal
                onClose={closePostTimeLimitModal}
                show={editTimeLimitModalIsVisible}
            />
        </div>
    );
};

export default GuestPermissionsTree;
