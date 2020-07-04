const serverAccount = {
    type: 'service_account',
    project_id: 'to-do-49d2f',
    private_key_id: '5a4e487cb271f120b34bf04b202c48156336d162',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCQCEPrzRJHrLQq\nhvdsQdlPfEWgQomz2bfZu8EXJQlYlVRzzvTmo7DCVa6J3CCxqEnpTKdgKMYQHWeM\nOtY9Li5/HIYKCrak7tVeueHqgHflUDX5gjjogVmXoCBAsRawJbk9Aa3A5yIY7e7I\n6/I1c47l210oXq5k2UcXVZ7Acb4T1nh3di3SAaIVLk65M4W3rGQmNlFbzEN5U9zJ\nvfH/qQ/4SdWdubvF3QEvwAan7FD1MLp1IhvLrFv4n7t5mlucFU2z24l6w0UmRX0n\nWG2A5VYU5CAxZFi0am+gYO6hKEJCsRUR/2O8uXC/O5h1N7os0sUXeqBvaeLZaU36\nKcIqIKJNAgMBAAECggEAHZDkyGm/P+FO1pAACEP4JN3guQYPmFCv8c0d1O9wXLPC\ns0cfdJzTcwD9pCUAvRdLnM10akPUbIhsshd91O8+8i7bwQHz/iVcvWYw3t9iPTta\n6Q33Opsa1goztLPlcWE9Bi3rCfcoQ6/L3Yi5nolLIxoFpHzTFbaYZkzYGq7+krmc\nCRpX4GzNs0zKUlqljgBI+KNRTTGV9/QNpfVOeTRoL9FHr2t78+PnofZSOkqFmLSG\nED6FY7XfEZxm8dkmZLTQRKujph/oZW1VaXvpzyUKJHwJ03WpPlF9Ql8U6ARaYy7l\nJGlwpxTr5ayi+KJamuPvYB+Bm4yuO9MmcLY9rfwLIQKBgQDAvjBZPFSzQM2byXRl\nRAHVLt1QSGutSM8YZLnnozmXYqYyR9InnlblD2PgsEalVhMAoLGfFBWQk3qTkF+2\n1gY3ZBsvqi1W0DORM6TCm14poR/gKVEANJnj3RqJTgvhF1nduX2UZPNc1i3G7AGa\niqcouzNHAssz0HlUE9Fcib0vRQKBgQC/TYWsfpljNdYFccYX23lBGaIAXKRT3Mon\nvvLeLz5KxuWfLINJpdyMtKytI6W/p61OQxoomobGr4pXugjqbF7NDxKlZz+V5q2a\nTRNqv33TKDx4hRG2/61P16r1vEfHCp/EtTmwIAHZU72ZG/VhssDor37mlPmvgEMl\n10LeE7+zaQKBgAXsUlQLtJaloSvubvNFucCxZf+3mgeDO0oGnmft7jEmyPC2oFCz\nXvw/EtSu1hzynjbguVSoK1l8DsJGJ4rY3OwK2YMHeck3ML5/lcqdN7GT0AT1gBW/\niBMmklAx48+RBiP4NVHAIHJz6og4bHwxUp2/0v2VqmT3PSNGUKLFYNj5AoGAPQ6M\nDIr3f9+t6FzwwaqN38ZDm2P2GsIMT3U1ZM6lTg5/OTdmy7nBU7NSrYwEGdB1ktX9\n4lm3jHB4chlxQQjHlSErbVkvxTMz01yoRtjJWvyrmDe4eLTP5vzJlta5/gAZEBpb\nSChfDrMYf2aaAc2gnmNs2EFSE76XL9utft3EwIkCgYBxiNLlMAIhHPhYmo6j1Fun\nFjGEotwusXpBgozF3dbHu1GfRSu3BxNrlmn3W/Q7BghQFdDhYy2fsArVDpdZlxG3\nLXOA2eGZEH089BJX8T4H62Kj6LIvei6xL9fKNrlG1Bcs5US0Q4S1YPhme2xljc9D\nV2o1ok7JM4o4Hv0pt23juw==\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-zfsso@to-do-49d2f.iam.gserviceaccount.com',
    client_id: '112063873740092834972',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zfsso%40to-do-49d2f.iam.gserviceaccount.com',
  };
  
  const admin = require('firebase-admin');
  const app = admin.initializeApp({
    credential: admin.credential.cert(serverAccount),
    databaseURL: 'https://to-do-49d2f.firebaseio.com',
  });
  const database = app.firestore();
  export default database;
  