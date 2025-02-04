// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {ChannelType} from './channels';
import {Post} from './posts';

export enum InsightsWidgetTypes {
    TOP_CHANNELS = 'TOP_CHANNELS',
    TOP_REACTIONS = 'TOP_REACTIONS',
    TOP_THREADS = 'TOP_THREADS',
    TOP_BOARDS = 'TOP_BOARDS',
}

export enum CardSizes {
    large = 'lg',
    medium = 'md',
    small = 'sm',
}
export type CardSize = CardSizes;

export enum TimeFrames {
    INSIGHTS_1_DAY = 'today',
    INSIGHTS_7_DAYS = '7_day',
    INSIGHTS_28_DAYS = '28_day',
}

export type TimeFrame = TimeFrames;

export type TopReaction = {
    emoji_name: string;
    count: number;
}

export type TopReactionResponse = {
    has_next: boolean;
    items: TopReaction[];
    timeFrame?: TimeFrame;
}

export type TopChannel = {
    id: string;
    type: ChannelType;
    display_name: string;
    name: string;
    team_id: string;
    message_count: number;
}

export type TopChannelGraphData = Record<string, Record<string, number>>;

export type TopChannelResponse = {
    has_next: boolean;
    items: TopChannel[];
    daily_channel_post_counts: TopChannelGraphData;
};

export type InsightsState = {
    topReactions: Record<string, Record<TimeFrame, Record<string, TopReaction>>>;
    myTopReactions: Record<string, Record<TimeFrame, Record<string, TopReaction>>>;
}

export type TopChannelActionResult = {
    data?: TopChannelResponse;
    error?: any;
};

export type TopThread = {
    channel_id: string;
    channel_display_name: string;
    channel_name: string;
    participants: string[];
    user_information: {
        id: string;
        first_name: string;
        last_name: string;
        last_picture_update: number;
    };
    post: Post;
};

export type TopThreadResponse = {
    has_next: boolean;
    items: TopThread[];
};

export type TopThreadActionResult = {
    data?: TopThreadResponse;
    error?: any;
};

export type TopBoard = {
    boardID: string;
    icon: string;
    title: string;
    activityCount: number;
    activeUsers: string;
    createdBy: string;
    workspaceID: string;
};

export type TopBoardResponse = {
    has_next: boolean;
    items: TopBoard[];
};
