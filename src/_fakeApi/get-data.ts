/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const getData = async <T extends any>(data: T[]):Promise<T[]> => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(data) , 300);
  })
}