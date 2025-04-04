uniform float zCam;

#ifdef PIXELSNAP
uniform vec4 uScreenSize;
#endif
#ifdef MORPHING
uniform vec4 morph_weights_a;
uniform vec4 morph_weights_b;
#endif
#ifdef MORPHING_TEXTURE_BASED
uniform vec4 morph_tex_params;
vec2 getTextureMorphCoords() {
	float vertexId = morph_vertex_id;
	vec2 textureSize = morph_tex_params.xy;
	vec2 invTextureSize = morph_tex_params.zw;
	float morphGridV = floor(vertexId * invTextureSize.x);
	float morphGridU = vertexId - (morphGridV * textureSize.x);
	return (vec2(morphGridU, morphGridV) * invTextureSize) + (0.5 * invTextureSize);
}
#endif
#ifdef MORPHING_TEXTURE_BASED_POSITION
uniform highp sampler2D morphPositionTex;
#endif
mat4 getModelMatrix() {
	#ifdef DYNAMICBATCH
	return getBoneMatrix(vertex_boneIndices);
	#elif defined(SKIN)
	return matrix_model * getSkinMatrix(vertex_boneIndices, vertex_boneWeights);
	#elif defined(INSTANCING)
	return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
	#else
	return matrix_model;
	#endif
}
vec4 getPosition() {
	dModelMatrix = getModelMatrix();
	vec3 localPos = vertex_position;
	#ifdef NINESLICED
	localPos.xz *= outerScale;
	vec2 positiveUnitOffset = clamp(vertex_position.xz, vec2(0.0), vec2(1.0));
	vec2 negativeUnitOffset = clamp(-vertex_position.xz, vec2(0.0), vec2(1.0));
	localPos.xz += (-positiveUnitOffset * innerOffset.xy + negativeUnitOffset * innerOffset.zw) * vertex_texCoord0.xy;
	vTiledUv = (localPos.xz - outerScale + innerOffset.xy) * -0.5 + 1.0;
	localPos.xz *= -0.5;
	localPos = localPos.xzy;
	#endif
	#ifdef MORPHING
	#ifdef MORPHING_POS03
	localPos.xyz += morph_weights_a[0] * morph_pos0;
	localPos.xyz += morph_weights_a[1] * morph_pos1;
	localPos.xyz += morph_weights_a[2] * morph_pos2;
	localPos.xyz += morph_weights_a[3] * morph_pos3;
	#endif
	#ifdef MORPHING_POS47
	localPos.xyz += morph_weights_b[0] * morph_pos4;
	localPos.xyz += morph_weights_b[1] * morph_pos5;
	localPos.xyz += morph_weights_b[2] * morph_pos6;
	localPos.xyz += morph_weights_b[3] * morph_pos7;
	#endif
	#endif
	#ifdef MORPHING_TEXTURE_BASED_POSITION
	vec2 morphUV = getTextureMorphCoords();
	vec3 morphPos = texture2D(morphPositionTex, morphUV).xyz;
	localPos += morphPos;
	#endif
	vec4 posW = dModelMatrix * vec4(localPos, 1.0);
	#ifdef SCREENSPACE
	posW.zw = vec2(0.0, 1.0);
	#endif
	dPositionW = posW.xyz;
	vec4 screenPos;
	#ifdef UV1LAYOUT
	screenPos = vec4(vertex_texCoord1.xy * 2.0 - 1.0, 0.5, 1);
	#else
	#ifdef SCREENSPACE
	screenPos = posW;
	#else
float minDistanceToCurve = 10.0;
//float zCam;
float depth = posW.z - zCam;
float noCurveDistance= 20.0;

if(depth > noCurveDistance) 
{
    float amountX = pow(depth - minDistanceToCurve, 2.0) * 0.0005;
    posW = posW + vec4( 0.0, -amountX,0.0, 0.0);
}
	screenPos = matrix_viewProjection * posW;
	#endif
	#ifdef PIXELSNAP
	screenPos.xy = (screenPos.xy * 0.5) + 0.5;
	screenPos.xy *= uScreenSize.xy;
	screenPos.xy = floor(screenPos.xy);
	screenPos.xy *= uScreenSize.zw;
	screenPos.xy = (screenPos.xy * 2.0) - 1.0;
	#endif
	#endif
	return screenPos;
}
vec3 getWorldPosition() {
	return dPositionW;
}
