interface GeneralResultModel<T> {
  Result: T;
}

const baseUrl = "http://127.0.0.1:5000";

export default {
  get: async <T>(url: string): Promise<GeneralResultModel<T>> => {
    const result = await fetch(`${baseUrl}/${url}`, {
      method: "GET",
    });

    const data = await result.json();

    return new Promise<GeneralResultModel<T>>((resolve, reject) => {
      if (data && result.status === 200) {
        resolve({
          Result: data.Result,
        });
      } else {
        reject({
          Result: data.Result,
        });
      }
    });
  },
};
