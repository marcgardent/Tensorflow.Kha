package tensorflow;

@:include("tensorflow/c/c_api.h")
extern class TensorFlow {

	@:native("TF_Version")
	extern public static function TF_Version() : String;
}
