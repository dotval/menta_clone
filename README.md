# MENTA Clone

menta.workというメンターマッチングサービスのクローンを作るプロジェクト

## スキル

### API

- Language: Node
- Framework: Express
- Database: MySQL
- ORM: Sequelize

### Client

- React

## 設計

[API設計書](https://github.com/dotval/menta_clone/blob/master/swagger.yml)（open apiで記述）

[swagger viewer](https://chrome.google.com/webstore/detail/swagger-viewer/nfmkaonpdmaglhjjlggfhlndofdldfag)で見るとSwagger UIみたににプレビューが表示されるのでオススメ。

## 環境構築

### 初期設定
1. Dockerコンテナの起動
    ```
    docker-compose up -d
    ```

2. Node.jsのコンテナに入る(これをやってからnpm関係のコマンドを打つ)
    ```
    docker exec -it menta_api /bin/sh
    ```

3. データベースのマイグレート
    ```
    npx sequelize-cli db:migrate
    ```
4. [localhost:3000](localhost:3000)にアクセス

### よく使うコマンド

- Dockerコンテナの起動
    ```
    docker-compose up -d
    ```
- Dockerコンテナの終了
    ```
    docker-compose down
    ```
- Node.jsのコンテナに入る
    ```
    docker exec -it menta_api /bin/sh
    ```
