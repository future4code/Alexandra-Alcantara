CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE recipes (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  description VARCHAR(255) NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
  );
  
  CREATE TABLE followers (
  follower_id VARCHAR(255) NOT NULL,
  followed_id VARCHAR(255) NOT NULL,
  following_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(follower_id, followed_id),
  FOREIGN KEY (follower_id) REFERENCES users (id),
  FOREIGN KEY (followed_id) REFERENCES users (id)
);