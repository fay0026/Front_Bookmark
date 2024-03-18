export default function pagination({ hydra }) {
  if (hydra.totalItems < 2) {
    return null;
  }
  return {
    current: hydra.id,
    first: hydra.,
    previous: hydra.,
    next: hydra.,
    last: hydra.,
  };
}
