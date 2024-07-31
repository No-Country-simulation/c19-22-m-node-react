import { EntitySchema } from 'typeorm';

export const FriendRequest = new EntitySchema({
	name: 'FriendRequest',
	tableName: 'friend_requests',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		senderId: {
			type: 'int',
		},
		receiverId: {
			type: 'int',
		},
		status: {
			type: 'varchar',
			default: 'pending',
		},
	},
});
