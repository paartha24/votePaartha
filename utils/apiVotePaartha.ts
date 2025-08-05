import { request, expect } from "@playwright/test"

/**
* @description: API to Vote for Paartha Saarati in CuteBaby Competition
* @param pVoteID - Provided voting ID to vote
*/
export async function votePaartha(pCookie: string,pNonceID: string, byName: string): Promise<void> {
    const voteID = '451147'; //#Paathasaarati Id

    const apiContext = await request.newContext();  // Create a request context
    const formData = new URLSearchParams();
    formData.append('action', 'vote_for_photo');
    formData.append('photo_id', voteID);
    formData.append('nonce_id', pNonceID);
    formData.append('option_id', 'basic');
    const headers = {
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8",
        Cookie: pCookie,
    };
    try {
        const response = await apiContext.post(`https://www.cutebabyvote.com/wp-admin/admin-ajax.php`, {
            data: formData.toString(),
            headers: headers
        });
        if (response.status() === 200) {
            console.info(response.status());
            console.info(response.statusText());
            console.info(`Successfully voted by ${byName}`);
            expect(response.status(), `Successfully voted by ${byName}`).toBe(200);
        } else {
            console.info(response.status());
            console.info(response.statusText());
            console.info('Vote unsuccessful');
            expect(response.status(), `Vote unsuccessful`).not.toBe(200);
        }
    } catch (err) {
        console.log(err);
    }
    await apiContext.dispose(); // Dispose the request context
}
