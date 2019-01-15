import request from 'utils/request';

export async function gitSearchApi(params) {
  return request({
    url: 'https://api.github.com/search/repositories',
    params,
  });
}
