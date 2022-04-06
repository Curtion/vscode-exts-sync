import path from 'path'
import { window } from 'vscode'
import type { ExtensionContext } from 'vscode'

export function activate(ctx: ExtensionContext) {
  const name = path.join(ctx.globalStorageUri.path, '../').replace(/^\\/, '')
  window.showInformationMessage(name)
}

export function deactivate() {

}
