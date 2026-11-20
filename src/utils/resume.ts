import resumePdfDataUrl from '../assets/Narendhar_D_Resume.pdf?inline';

export const RESUME_FILENAME = 'Narendhar_D_Resume.pdf';

function dataUrlToPdfBlob(dataUrl: string): Blob {
  const base64Part = dataUrl.split(',')[1] ?? '';
  const binary = window.atob(base64Part);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: 'application/pdf' });
}

export async function downloadResume(): Promise<void> {
  try {
    let blob: Blob;
    if (resumePdfDataUrl.startsWith('data:')) {
      blob = dataUrlToPdfBlob(resumePdfDataUrl);
    } else {
      const response = await fetch(resumePdfDataUrl, { credentials: 'same-origin' });
      if (!response.ok) {
        throw new Error('Failed to fetch resume asset');
      }
      const buffer = await response.arrayBuffer();
      blob = new Blob([buffer], { type: 'application/pdf' });
    }

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 15000);
  } catch {
    const fallbackLink = document.createElement('a');
    fallbackLink.href = '/resume.pdf';
    fallbackLink.download = RESUME_FILENAME;
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
