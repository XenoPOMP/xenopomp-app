import { Args, Command, Flags } from '@oclif/core';
import shx from 'shelljs';

interface DefaultOptions {
  name: string | undefined;
}

type MigrationEffect = (options: DefaultOptions) => Promise<void>;

export default class Migrate extends Command {
  static override args = {
    type: Args.string({
      name: 'migration type',
      options: ['prisma'],
      required: true,
    }),
  };
  static override description = 'Runs any type of migrations inside app';
  static override examples = [
    '<%= config.bin %> <%= command.id %> prisma - run Prisma migration process with types generation',
  ];
  static override flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({
      char: 'n',
      description: 'name of migration',
      required: true,
    }),
  };
  private migratePrisma: MigrationEffect = async ({ name }) => {
    shx.exec(`yarn migrate:dev --name ${name} && yarn pack:either`);
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Migrate);
    const { type } = args;

    const actionMap: Map<string, MigrationEffect> = new Map([
      ['prisma', this.migratePrisma],
    ]);

    // Run selected effect
    actionMap.get(type)?.(flags);
  }
}
