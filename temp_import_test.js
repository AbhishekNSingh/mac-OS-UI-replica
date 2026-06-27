import fs from 'fs';
const pkgPath = new URL('./node_modules/react-console-emulator/package.json', import.meta.url);
const pkg = JSON.parse(fs.readFileSync(pkgPath));
console.log('dep package.json main:', pkg.main, 'module:', pkg.module, 'exports:', pkg.exports);
try {
  const mod = await import('react-console-emulator');
  console.log('import default', mod.default ? 'ok' : 'undefined');
  console.log('keys', Object.keys(mod));
} catch (err) {
  console.error('import error', err?.message);
}
