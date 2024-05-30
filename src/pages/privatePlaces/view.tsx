import { Grid } from "@mui/material";
import { DataWidget } from "componentsss";
import DetailsComponent from "componentsss/detailsComponent";
import { ImageGrid, StyledImage } from "componentsss/style";
import {
  useApproveMutation,
  usePlaceByIdQuery,
  useRejectMutation,
} from "data/privatePlace";
import { useParams } from "react-router-dom";
import { DateTimeFormatter } from "utils/DatetimeUtil";
import { imageUrlResolver } from "utils/globalUtils";

const ViewPrivatePlace = () => {
  const { id } = useParams() as any;
  const { data } = usePlaceByIdQuery(id ?? "");
  const { getSimpleFormattedDate } = DateTimeFormatter;
  const [approve] = useApproveMutation();
  const [reject] = useRejectMutation();

  return (
    <DetailsComponent
      startTitle={"Private Place Details"}
      startContent={
        <Grid item container xs={12} direction="column" gap="1rem">
          <Grid item container justifyContent="space-between" xs={12}>
            <Grid item xs={12} md={5.6}>
              <DataWidget
                label={"Place Name"}
                value={data?.place?.placeName ?? "-"}
              />
            </Grid>
            <Grid item xs={12} md={5.6}>
              <DataWidget
                label={"Owner Email"}
                value={data?.place?.userEmail ?? "-"}
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between" xs={12}>
            <Grid item xs={12} md={5.6}>
              <DataWidget
                label={"Available From"}
                value={getSimpleFormattedDate(
                  data?.place?.availableFrom?.toString() ?? ""
                )}
              />
            </Grid>
            <Grid item xs={12} md={5.6}>
              <DataWidget
                label={"Available To"}
                value={getSimpleFormattedDate(
                  data?.place?.availableTo?.toString() ?? ""
                )}
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between" xs={12}>
            <Grid item xs={12} md={5.6}>
              <DataWidget
                label={"Register Number"}
                value={data?.place?.registerNumber ?? "-"}
              />
            </Grid>
          </Grid>
        </Grid>
      }
      endTitle={"Images Details"}
      endContent={
        <Grid item container spacing={2}>
          {data?.place?.images?.map((image: string, index: number) => (
            <StyledImage key={`${data?.place.placeId ?? "-"}-image-${index}`}>
              <Grid
                item
                sx={{ position: "relative", width: "100%", height: "100%" }}
              >
                <ImageGrid
                  component="img"
                  src={imageUrlResolver(image)}
                  alt={`Image ${index + 1}`}
                  onClick={() => window.open(imageUrlResolver(image))}
                />
              </Grid>
            </StyledImage>
          ))}

          {data?.place?.imageOfOwnerID && (
            <StyledImage key={`${data?.place?.placeId ?? "-"}-owner`}>
              <Grid
                item
                sx={{ position: "relative", width: "100%", height: "100%" }}
              >
                <ImageGrid
                  component="img"
                  src={imageUrlResolver(data?.place?.imageOfOwnerID ?? "")}
                  alt="Owner Image"
                  onClick={() =>
                    window.open(
                      imageUrlResolver(data?.place?.imageOfOwnerID ?? "")
                    )
                  }
                />
              </Grid>
            </StyledImage>
          )}

          {data?.place?.imageOfOwnershipProof && (
            <StyledImage key={`${data?.place?.placeId ?? "-"}-ownership-proof`}>
              <Grid
                item
                sx={{ position: "relative", width: "100%", height: "100%" }}
              >
                <ImageGrid
                  component="img"
                  src={imageUrlResolver(
                    data?.place?.imageOfOwnershipProof ?? ""
                  )}
                  alt="Ownership Proof Image"
                  onClick={() =>
                    window.open(
                      imageUrlResolver(data?.place?.imageOfOwnershipProof ?? "")
                    )
                  }
                />
              </Grid>
            </StyledImage>
          )}
        </Grid>
      }
      primaryAction={() => approve(data?.place?.placeId ?? "")}
      primaryTitle={"Approve"}
      secondaryTitle="Reject"
      secondaryAction={() =>
        reject({
          placeId: data?.place?.placeId ?? "",
          rejectionReason: "Hello world",
        })
      }
    />
  );
};
export default ViewPrivatePlace;
