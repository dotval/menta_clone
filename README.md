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

<<<<<<< HEAD
### 初期設定
1. クローン
    ```
    git clone https://github.com/dotval/menta_clone.git
    cd menta_clone
    ```

2. envファイルの作成
    ```
    cp mysql/mysql.env.example mysql/mysql.env
    ```
    ```
    cp api/api.env.example api/api.env
    ```

3. コンテナ立ち上げ
    ```
    docker-compose up -d
    ```
4. Node.jsのコンテナに入る(これをやってからnpm関係のコマンドを打つ)
    ```
    docker exec -it menta_api /bin/sh
    ```

5. 初期パッケージのインストール
    ```
    npm install
    ```
6. データベースのマイグレーション
    ```
    npx sequelize-cli db:migrate
    ```

7. [localhost:3000](http://localhost:3000)にアクセス

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
