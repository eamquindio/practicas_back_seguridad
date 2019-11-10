'use strict';

module.exports = function(Usuario) {
  Usuario.getIdRol = function(id, cb) {
    var ds = Usuario.dataSource;
    var sql = 'SELECT usuario.id, rolemapping.roleid, usuario.email FROM ';
    sql = sql + 'rolemapping JOIN usuario ON CAST(rolemapping.principalid ';
    sql = sql + 'AS int4) = usuario.id WHERE usuario.id = ' + id;
    ds.connector.query(sql, function(err, usuario) {
      if (err) console.error(err);
      cb(err, usuario);
    });
  };

  Usuario.remoteMethod(
    'getIdRol',
    {
      http: {verb: 'get'},
      description: '',
      accepts: {arg: 'id', type: 'array'},
      returns: {arg: 'data', type: 'array', root: true},
    }
  );
};
