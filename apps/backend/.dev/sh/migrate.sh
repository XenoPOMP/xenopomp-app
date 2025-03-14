BASEDIR=$(PWD)
MIGRATION_NAME=$1

echo "$BASEDIR"

if [[ $BASEDIR =~ backend$ ]]; then
    echo "Starting migration..."
else
    # Exit application if PWD is not "backend"
    echo "You should call this script from apps/backend folder!" && exit 1
fi

yarn migrate:dev --name "$MIGRATION_NAME"
yarn pack:types