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

1. クローン

```
git clone https://github.com/dotval/menta_clone.git
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
