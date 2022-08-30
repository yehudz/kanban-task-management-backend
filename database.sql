CREATE TABLE board (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);