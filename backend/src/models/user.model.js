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
			default: '/images.jpg',
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
		occupation: {
			type: 'varchar',
			nullable: true,
		},
		location: {
			type: 'varchar',
			nullable: true,
		},
		education: {
			type: 'varchar',
			nullable: true,
		},
		about: {
			type: 'varchar',
			nullable: true,
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
		comments: {
			type: 'one-to-many',
			target: 'Comment',
			cascade: true,
			inverseSide: 'user',
		},
		likes: {
			target: 'Like',
			type: 'one-to-many',
			inverseSide: 'user',
		},
	},
});
