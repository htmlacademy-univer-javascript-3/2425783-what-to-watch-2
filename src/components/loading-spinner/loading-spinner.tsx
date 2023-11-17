export default function LoadingSpinner() {
  return(
    <img style={{position: 'fixed', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}} className="loading-spinner" src="/img/loading-spinner.svg" alt="loading-spinner"/>
  );
}
