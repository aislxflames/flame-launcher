export interface Platform {
  /**
   * The system name of the platform. This name is majorly used for download.
   */
  os: 'osx' | 'linux' | 'windows' | 'unknown'
  /**
   * The version of the os. It should be the value of `os.release()`.
  */
  osRelease: string
  /**
   * The direct output of `os.arch()`. Should look like x86 or x64.
   */
  arch: 'x86' | 'x64' | string
}
