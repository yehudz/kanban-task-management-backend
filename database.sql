CREATE TABLE board (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE boardColumn (
  id uuid DEFAULT uuid_generate_v4 (),
  PRIMARY KEY (id),
  board_id uuid NOT NULL,
  column_order INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  CONSTRAINT fk_board FOREIGN KEY(board_id) REFERENCES board(id) on delete cascade
);

CREATE TABLE task (
  id uuid DEFAULT uuid_generate_v4 (),
  PRIMARY KEY (id),
  board_column_id uuid NOT NULL,
  task_order INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(500),
  CONSTRAINT fk_board_column_id FOREIGN KEY(board_column_id) REFERENCES boardColumn(id) on delete cascade
);