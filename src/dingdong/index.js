// ^https:\/\/maicai\.api\.ddxq\.mobi\/order\/logistics url script-response-body https://raw.githubusercontent.com/alexyan/QuantumultX/webpack/build/dingdong.bundle.js

// https://maicai.api.ddxq.mobi/order/logistics?api_version=9.47.1&app_client_id=1&app_type=&buildVersion=1211&channel=App%20Store&city_number=0101&countryCode=CN&device_id=0846b77579e67b830d8290fd2acc9ce3aaa7a352&device_model=iPhone14%2C2&device_name=iPhone14%2C2&idfa=DB3BDECE-D32A-49A5-896C-1DE93C5F2D4A&ip=&languageCode=zh&latitude=31.206399&localeIdentifier=zh_CN&longitude=121.538044&os_version=15.4&seqid=2937355357&sign=dd581cce2c59c916618078a5fda5a08f&station_id=53ed62977f8b9ac4b18b4bc4&time=1647940228&uid=6030f7ee2507db0001ecaced
const key = 'dingdong-logistics'

$prefs.setValueForKey(key, JSON.stringify({
  url: $request.url,
  headers: $request.headers,
  body: $response.body
}))

$notify('叮咚', $request.url, $prefs.valueForKey(key))

$done({})