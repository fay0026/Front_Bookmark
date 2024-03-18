export default function pagination({ hydra }) {
  if (hydra.totalItems < 2) {
    return null;
  }
  return {
    current: hydra.id,
    first: hydra.first,
    previous: hydra.previous,
    next: hydra.next,
    last: hydra.last,
  };
}
