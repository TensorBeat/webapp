// source: tensorbeat/sarosh_gen.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var tensorbeat_common_pb = require('../tensorbeat/common_pb.js');
goog.object.extend(proto, tensorbeat_common_pb);
goog.exportSymbol('proto.tensorbeat.sarosh_gen.GenerateMusicRequest', null, global);
goog.exportSymbol('proto.tensorbeat.sarosh_gen.GenerateMusicResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorbeat.sarosh_gen.GenerateMusicRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorbeat.sarosh_gen.GenerateMusicRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.sarosh_gen.GenerateMusicRequest.displayName = 'proto.tensorbeat.sarosh_gen.GenerateMusicRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorbeat.sarosh_gen.GenerateMusicResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorbeat.sarosh_gen.GenerateMusicResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorbeat.sarosh_gen.GenerateMusicResponse.displayName = 'proto.tensorbeat.sarosh_gen.GenerateMusicResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.sarosh_gen.GenerateMusicRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.sarosh_gen.GenerateMusicRequest;
  return proto.tensorbeat.sarosh_gen.GenerateMusicRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNotes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.sarosh_gen.GenerateMusicRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string notes = 1;
 * @return {!Array<string>}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.getNotesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.setNotesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.addNotes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicRequest} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicRequest.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorbeat.sarosh_gen.GenerateMusicResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    notesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorbeat.sarosh_gen.GenerateMusicResponse;
  return proto.tensorbeat.sarosh_gen.GenerateMusicResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNotes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorbeat.sarosh_gen.GenerateMusicResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string notes = 1;
 * @return {!Array<string>}
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.getNotesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.setNotesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.addNotes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorbeat.sarosh_gen.GenerateMusicResponse} returns this
 */
proto.tensorbeat.sarosh_gen.GenerateMusicResponse.prototype.clearNotesList = function() {
  return this.setNotesList([]);
};


goog.object.extend(exports, proto.tensorbeat.sarosh_gen);
