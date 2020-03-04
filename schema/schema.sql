create schema if not exists koa charset utf8mb4 collate utf8mb4_unicode_ci;

create table if not exists koa.user
(
	id int unsigned auto_increment comment '主键'
		primary key,
	name varchar(20) not null comment '姓名',
	age int not null comment '年龄',
	date_time datetime default CURRENT_TIMESTAMP not null comment '创建时间'
);



