import { useState, useEffect } from "react";
import { ImageUpload } from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { MapPin, Loader2, CheckCircle2, Upload, Flame, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import potholeImage from "@assets/generated_images/pothole_in_road_surface.png";

export default function ReportIssue() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [image, setImage] = useState<string>();
  const [analyzing, setAnalyzing] = useState(false);
  const [aiResult, setAiResult] = useState<{
    type: string;
    severity: string;
    confidence: number;
  }>();
  const [description, setDescription] = useState("");
  const [gpsLocation] = useState("Main Street & 5th Avenue, Downtown");
  const [isEmergency, setIsEmergency] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    if (params.get('type') === 'fire') {
      setIsEmergency(true);
    }
  }, [location]);

  const handleImageSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setStep(2);
      analyzeImage();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    setTimeout(() => {
      if (isEmergency) {
        setAiResult({
          type: "Fire Emergency",
          severity: "EMERGENCY",
          confidence: 98,
        });
      } else {
        setAiResult({
          type: "Pothole",
          severity: "High",
          confidence: 94,
        });
      }
      setAnalyzing(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setStep(3);
    if (isEmergency) {
      toast({
        title: "🔥 Fire Emergency Reported!",
        description: "Fire authorities have been immediately alerted. Stay safe!",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Issue Reported Successfully!",
        description: "Your report has been submitted to local authorities.",
      });
    }
  };

  const progressValue = step === 1 ? 33 : step === 2 ? 66 : 100;

  if (step === 3) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-12 pb-8 text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2" data-testid="text-success-title">
              Report Submitted!
            </h2>
            <p className="text-muted-foreground mb-2">
              Tracking ID: <span className="font-mono font-semibold">CC-2024-1247</span>
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              You'll receive updates as authorities take action on your report.
            </p>
            <div className="space-y-2">
              <Button
                className="w-full"
                onClick={() => {
                  setStep(1);
                  setImage(undefined);
                  setAiResult(undefined);
                  setDescription("");
                }}
                data-testid="button-report-another"
              >
                Report Another Issue
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => console.log("View my reports")}
                data-testid="button-view-reports"
              >
                View My Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4">
        {isEmergency && (
          <Card className="mb-6 border-destructive border-2 bg-destructive/10">
            <CardContent className="p-4 flex items-start gap-3">
              <Flame className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-destructive mb-1">Fire Emergency Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Your report will be sent immediately to fire authorities. For life-threatening situations, also call 911.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 ${isEmergency ? "text-destructive flex items-center gap-2" : ""}`} data-testid="text-page-title">
            {isEmergency && <Flame className="h-8 w-8" />}
            {isEmergency ? "Report Fire Emergency" : "Report an Issue"}
          </h1>
          <p className="text-muted-foreground">
            {isEmergency 
              ? "Quick photo reporting bypasses phone calls for faster response"
              : "Help improve your community by reporting civic issues"}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Step {step} of 3
            </span>
            <span className="text-sm text-muted-foreground">
              {step === 1 ? "Upload Photo" : step === 2 ? "Review & Submit" : "Complete"}
            </span>
          </div>
          <Progress value={progressValue} data-testid="progress-bar" />
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <ImageUpload
              onImageSelect={handleImageSelect}
              currentImage={image}
              onRemove={() => setImage(undefined)}
            />
            <Card className="bg-muted/30">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> Take a clear photo showing the entire issue.
                  Include landmarks or street signs for better location accuracy.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-0">
                <img
                  src={image || potholeImage}
                  alt="Uploaded issue"
                  className="w-full aspect-[4/3] object-cover rounded-t-lg"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {analyzing ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analyzing Image...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      AI Detection Complete
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              {aiResult && (
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Issue Type:</span>
                    <Badge variant="secondary" data-testid="badge-detected-type">{aiResult.type}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Severity:</span>
                    <Badge 
                      className={aiResult.severity === "EMERGENCY" 
                        ? "bg-destructive text-destructive-foreground animate-pulse" 
                        : "bg-destructive/20 text-destructive"
                      } 
                      data-testid="badge-detected-severity"
                    >
                      {aiResult.severity === "EMERGENCY" && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {aiResult.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Confidence:</span>
                    <span className="font-mono font-semibold" data-testid="text-confidence">
                      {aiResult.confidence}%
                    </span>
                  </div>
                </CardContent>
              )}
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground" data-testid="text-location">
                  {gpsLocation}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Auto-detected from your current location
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Details (Optional)</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add any additional information that might help authorities address this issue..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  data-testid="textarea-description"
                />
              </CardContent>
            </Card>

            <Button
              className={`w-full ${isEmergency ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}`}
              size="lg"
              onClick={handleSubmit}
              disabled={analyzing}
              data-testid="button-submit-report"
            >
              {isEmergency ? <Flame className="h-5 w-5 mr-2" /> : <Upload className="h-5 w-5 mr-2" />}
              {isEmergency ? "Alert Fire Authorities" : "Submit Report"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
