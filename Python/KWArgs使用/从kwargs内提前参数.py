"""
 * @file   : 从kwargs内提前参数.py
 * @time   : 11:51
 * @date   : 2023/7/19
 * @mail   : 9727005@qq.com
 * @creator: ShanDong Xiedali
 * @company: HiLand & RainyTop
"""


def get_data(**kwargs):
    retry = kwargs.get('retry', 10)
    sleep = kwargs.get('sleep', 0)
    question = kwargs.get('query')
    log = kwargs.get('log', False)
    query_type = kwargs.get('query_type', 'stock')
    cookie = kwargs.get('cookie', None)
    request_params = kwargs.get('request_params', {})

    print("获取到的信息为：")

    print(retry)
    print(cookie)
    print(sleep)
    print(question)
    print(log)
    print(query_type)
    print(request_params)


pass

if __name__ == '__main__':
    get_data(retry=8, sleep=0, query='股票户', log=False, query_type='stock', cookie=None, request_params={})
pass
