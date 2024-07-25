import { EntitySchema } from 'typeorm';

export const User = new EntitySchema({
	name: 'User',
	tableName: 'users',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: true,
		},
		name: {
			type: 'varchar',
		},
		profilePic: {
			type: 'varchar',
			default: '../utils/images.jpg',
		},
		lastname: {
			type: 'varchar',
		},
		mail: {
			type: 'varchar',
		},
		username: {
			type: 'varchar',
		},
		password: {
			type: 'varchar',
		},
	},
	relations: {
		friends: {
			target: 'User',
			type: 'many-to-many',
			joinTable: {
				name: 'user_friends',
				joinColumn: { name: 'userId', referencedColumnName: 'id' },
				inverseJoinColumn: { name: 'friendId', referencedColumnName: 'id' },
			},
			cascade: true,
		},
		posts: {
			type: 'one-to-many',
			target: 'Post',
			cascade: true,
			inverseSide: 'user',
		},
	},
});
