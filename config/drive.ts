import Application from '@ioc:Adonis/Core/Application'
import { DriveConfig } from '@ioc:Adonis/Core/Drive'
import Env from '@ioc:Adonis/Core/Env'

const driveConfig: DriveConfig = {
  disk: Env.get('DRIVE_DISK'),

  disks: {
    local: {
      driver: 'local',
      visibility: 'public',
      root: Application.tmpPath('uploads'),
      serveFiles: true,
      basePath: '/uploads',
    },
  },
}

export default driveConfig
