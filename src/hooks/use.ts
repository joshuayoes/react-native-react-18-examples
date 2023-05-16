// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
export function use<T>(_promise: Promise<T>): T {
  const promise = _promise as Promise<T> & {
    status: string;
    value: T;
    reason?: any;
  };
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      },
    );
    throw promise;
  }
}
