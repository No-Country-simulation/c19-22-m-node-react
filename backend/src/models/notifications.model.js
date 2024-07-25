import { EntitySchema } from 'typeorm';

export const Notification = new EntitySchema({
	name: 'Notification',
	tableName: 'notifications',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		userId: {
			type: 'int',
		},
		message: {
			type: 'varchar',
		},
		read: {
			type: 'boolean',
			default: false,
		},
	},
});
