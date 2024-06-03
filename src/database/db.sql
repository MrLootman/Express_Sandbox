CREATE TABLE developer (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(55) NOT NULL
);

CREATE TABLE video_game (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(55) NOT NULL,
  developer_id INT NOT NULL,
  FOREIGN KEY (developer_id) REFERENCES developer(id)
);

INSERT INTO developer (name) VALUES ("From Software");

INSERT INTO video_game (name, developer_id) VALUES ("Elden Ring", 1), ("Dark Souls 3", 1);