import Dialog from '@/components/Dialog';

const ImprintDialog = () => (
  <Dialog 
    id="imprint"
    title="Imprint"
  >
    <h2 className="font-bold opacity-75 text-lg">Company data & webhosting</h2>
    <dl>
      <dt className="opacity-50 uppercase tracking-widest font-mono text-xs">Name</dt>
      <dd className="opacity-80 text-lg font-bold">skape.io Kft.</dd>
      <dt className="mt-4 opacity-50 uppercase tracking-widest font-mono text-xs">Address</dt>
      <dd className="opacity-80 text-lg font-bold">1092 Budapest, Erkel u. 13/A</dd>
      <dt className="mt-4 opacity-50 uppercase tracking-widest font-mono text-xs">E-mail address</dt>
      <dd className="opacity-80 text-lg font-bold"><a href="mailto:hello@skape.io">hello@skape.io</a></dd>
    </dl>
  </Dialog>
);

export default ImprintDialog;