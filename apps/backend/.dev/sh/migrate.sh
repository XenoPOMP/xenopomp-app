MIGRATION_NAME=$1

yarn migrate:dev --name "$MIGRATION_NAME"
yarn pack:types