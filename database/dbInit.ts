import {Sequelize} from 'sequelize';

const URI = 'postgres://sdelanvdnb:s5yu4qotvHKd@ep-late-boat-493332.eu-central-1.aws.neon.tech/neondb';

export const dbInit = () => {
  return new Sequelize(
    URI,
    {
      dialectOptions: {
        ssl: true,
      }
    }
  );
};
