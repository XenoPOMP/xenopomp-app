import { Args, Command, Flags } from '@oclif/core';
import { exec } from 'node:child_process';

interface DefaultOptions {
  name: string | undefined;
}

export default class Migrate extends Command {
  static override args = {
    type: Args.string({
      name: 'migration type',
      options: ['prisma'],
      required: true,
    }),
  };
  static override description = 'run any type of migrations inside app';
  static override examples = [
    '<%= config.bin %> <%= command.id %> prisma - run Prisma migration process with types generation',
  ];
  static override flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: 'n', description: 'name of migration' }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Migrate);
    const { type } = args;

    switch (type) {
      case 'prisma': {
        await this.migratePrisma(flags);
      }
    }
  }

  private async migratePrisma({ name }: DefaultOptions) {
    exec(`yarn migrate:dev --name ${name} && yarn pack:either`);
  }
}
