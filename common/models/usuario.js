'use strict';

module.exports = function(Usuario) {
  Usuario.validationToken = function(id, cb) {
    var ds = Usuario.dataSource;
    var sql = 'SELECT * FROM control_access.accesstoken where id = ?';
    ds.connector.query(sql, id, function(err, token) {
      if (err) console.error(err);
      // var tiempo = token.created.split(' ');
      // console.log(token.);
      // var valores = tiempo.split(':');
      // var segundosToken = (parseInt(valores[0]) * 3600) + (parseInt(valores[1]) * 60) + parseInt(valores[2]);
      // var hora = new Date();
      // var segundosActual = (hora.getHours() * 3600) + (hora.getMinutes() * 60) + hora.getSeconds();

      // if (segundosToken - segundosActual < token.ttl) {
      // var sql2 = 'UPDATE control_access.accesstoken B SET `ttl` = (SELECT C.* FROM (SELECT A.ttl + 3600 FROM control_access.accesstoken A where A.id = ?) C) WHERE B.id = ?';
      // ds.connector.query(sql2, id);
      // }
      cb(err, token);
    });
  };

  Usuario.remoteMethod(
    'validationToken',
    {
      http: {verb: 'get'},
      description: 'Get list of cursos and instructors by idformacion',
      accepts: {arg: 'id', type: 'array'},
      returns: {arg: 'data', type: 'array', root: true},
    }
  );
};
