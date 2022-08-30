CREATE TABLE board (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE boardColumn (
  id uuid DEFAULT uuid_generate_v4 (),
  PRIMARY KEY (id),
  board_id uuid NOT NULL,
  name VARCHAR(50) NOT NULL,
  CONSTRAINT fk_board FOREIGN KEY(board_id) REFERENCES board(id) on delete cascade
);