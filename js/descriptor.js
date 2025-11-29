const MODEL_URL = './models'; 
    let modelsLoaded = false;

    // Cargar modelos
    async function loadModels() {
    console.log("Intentando cargar modelos desde:", MODEL_URL);
    await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
    ]);
    console.log("✅ Modelos cargados correctamente");
    modelsLoaded = true;
    }
    loadModels().catch(err => console.error("❌ Error cargando modelos:", err));

    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');

    fileInput.addEventListener('change', async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const url = URL.createObjectURL(file);
      preview.src = url;

      await new Promise(resolve => { preview.onload = resolve; });

      if (!modelsLoaded) {
        document.getElementById('status').textContent = "Modelos aún no listos…";
        console.warn("Intento de detección antes de cargar modelos");
        return;
      }

      document.getElementById('status').textContent = "Procesando imagen…";
      console.log("Procesando imagen:", file.name);

      try {
        const result = await faceapi
          .detectSingleFace(preview)
          .withFaceLandmarks()
          .withFaceDescriptor();

        if (!result) {
          document.getElementById('status').textContent = "No se detectó rostro ❌";
          console.warn("No se detectó rostro en la imagen");
          return;
        }

        const descriptorArray = Array.from(result.descriptor);
        document.getElementById('status').textContent = "Rostro detectado ✅";
        console.log("Descriptor generado (longitud:", descriptorArray.length, "):");
        console.log(descriptorArray);

      } catch (err) {
        document.getElementById('status').textContent = "Error procesando imagen ❌";
        console.error("Error procesando imagen:", err);
      } finally {
        URL.revokeObjectURL(url);
      }
    });