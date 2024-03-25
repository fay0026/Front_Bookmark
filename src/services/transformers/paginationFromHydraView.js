export default function paginationFromHydraView(hydra, totalItems) {
  if (totalItems < 2) {
    return null;
  }
  return {
    current: hydra.id,
    first: hydra["hydra:first"],
    last: hydra["hydra:last"],
    previous: hydra["hydra:previous"],
    next: hydra["hydra:next"],
  };
}
