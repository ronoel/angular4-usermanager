import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'http://localhost:8080/decorateste-1.0/rest'
};

export = ProdConfig;

