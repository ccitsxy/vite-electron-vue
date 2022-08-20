import os from 'node:os'
import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  platform: os.platform(),
})
